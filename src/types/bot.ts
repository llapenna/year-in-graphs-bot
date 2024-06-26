import { Scenes, Middleware } from "telegraf";

interface FormWizardSession extends Scenes.WizardSessionData {
  mood?: number;
  weight?: number;
  coffeeCount?: number;
  didCry?: boolean;
  didExercise?: boolean;
  didMeditate?: boolean;
}
/**
 * Context for the form wizard. It stores the "form" data in the session
 * @example
 * // Retrieve data from the session
 * const mood = ctx.scene.session.mood
 */
export type FormWizardContext = Scenes.WizardContext<FormWizardSession>;

export type Callback = Middleware<FormWizardContext>;

/**
 * Keyboard button type used to register new keyboard buttons INSIDE
 * a command
 */
export interface Action {
  name: string;
  handler: Callback;
}

/**
 * Command type used to register new commands
 */
export interface Command {
  command: string;
  description: string;
  handler: Callback;
  keyboard?: Action[];
}
