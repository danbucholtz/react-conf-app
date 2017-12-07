import { Animation, AnimationBuilder, AnimationController } from './animation-interface';
import { Animator } from './animator';
export class AnimationControllerImpl {
    create(animationBuilder, baseElm, opts) {
        return new Promise(resolve => {
            if (animationBuilder) {
                resolve(animationBuilder(Animator, baseElm, opts));
            }
            else {
                resolve(new Animator());
            }
        });
    }
}
