export function createDomControllerClient(win, now, rafPending) {
    const readCBs = [];
    const writeCBs = [];
    const raf = (cb) => win.requestAnimationFrame(cb);
    function rafFlush(timeStamp, startTime, cb, err) {
        try {
            startTime = now();
            // ******** DOM READS ****************
            while (cb = readCBs.shift()) {
                cb(timeStamp);
            }
            // ******** DOM WRITES ****************
            while (cb = writeCBs.shift()) {
                cb(timeStamp);
                if ((now() - startTime) > 8) {
                    break;
                }
            }
        }
        catch (e) {
            err = e;
        }
        if (rafPending = (readCBs.length > 0 || writeCBs.length > 0)) {
            raf(rafFlush);
        }
        if (err) {
            console.error(err);
        }
    }
    return {
        read: (cb) => {
            readCBs.push(cb);
            if (!rafPending) {
                rafPending = true;
                raf(rafFlush);
            }
        },
        write: (cb) => {
            writeCBs.push(cb);
            if (!rafPending) {
                rafPending = true;
                raf(rafFlush);
            }
        },
        raf: raf
    };
}
