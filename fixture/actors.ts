import { test as base } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';
import { UseActor } from '../screenplay/actors/Actors';

type MyActors = {
    adminActor: Actor;
    anotherActor: Actor;
};

export const test = base.extend<MyActors>({
    adminActor: async ({ browser, request }, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const adminActor = UseActor(page, request, 'Admin Actor', '000001');
        await use(adminActor);
    },
    anotherActor: async ({ browser, request }, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const anotherActor = UseActor(page, request, 'Another Actor Defined By You', '000001');
        anotherActor.with('page', page);

        await use(anotherActor);
    },
});

export { expect } from '@playwright/test';
