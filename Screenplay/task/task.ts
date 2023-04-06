import { Actor, Task } from '@testla/screenplay-playwright';
import { Post } from '@testla/screenplay-playwright/api';
import { Navigate, Fill, Click, Wait } from '@testla/screenplay-playwright/web';
import { loginURL, inputDictamen, buttonEdit, buttonSearch } from '../screen/formScreen';

/**
 * Login via Web UI
 */
export class searchDictamen extends Task {
    private constructor(private mode: 'web') {
        super();
    }

    public async performAs(actor: Actor): Promise<any> {
        if(this.mode === 'web') {
            return await actor.attemptsTo(
                Navigate.to(loginURL),
                Click.on(buttonEdit),
                Fill.in(inputDictamen, actor.states('0000001') || ''),
                Click.on(buttonSearch),
            );
        }
    }

    /**
     * Login with the actor username + password and navigate to the given Opportunity URL.
     *
     */
    public static viaWeb(): searchDictamen {
        return new searchDictamen('web');
    }

}
