import { APIRequestContext, Page } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';
import { UseAPI } from '@testla/screenplay-playwright/api';
import { BrowseTheWeb } from '@testla/screenplay-playwright/web'
/**
 * create a screenplay actor using the following parameters.
 *
 * @param page a playwright page object.
 * @param actorName the name of the actor.
 * @param dictamen the username of the actor.

 * @constructor
 */
export function UseActor(page: Page, request: APIRequestContext, actorName: string, dictamen: string,): Actor {
    const actor = Actor.named(actorName)
        .with('username', dictamen)
        .can(BrowseTheWeb.using(page))
        .can(UseAPI.using(request));

    return actor;
}
