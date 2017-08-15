import { isDef } from '../../utils/helpers';
export function getRootTransitionId(nav) {
    nav = nav.getParent();
    while (nav) {
        var transitionId = nav.transitionId;
        if (isDef(transitionId)) {
            return transitionId;
        }
        nav = nav.getParent();
    }
    return -1;
}
export function nextId() {
    return transitionIds++;
}
export function destroy(transitionId) {
    var transition = transitions.get(transitionId);
    if (transition) {
        transition.destroy();
        transitions.delete(transitionId);
    }
}
export function getTransition(transitionId, viewController, opts) {
    var TransitionConstructor = Ionic.config.get(opts.animation) || Ionic.config.get('ios-transition');
    var transition = new TransitionConstructor(viewController.element);
    transition.transitionId = transitionId;
    var rootTransition = transitions.get(transitionId);
    if (rootTransition) {
        rootTransition.add(transition);
    }
    else {
        transitions.set(transitionId, transition);
    }
    return transition;
}
var transitionIds = 0;
var transitions = new Map();
