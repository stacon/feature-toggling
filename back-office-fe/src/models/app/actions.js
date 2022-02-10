import ActionCreator from "../../aa-minimal-core-lib/models/actions/ActionCreator";

const namespacedActionCreator = ActionCreator("//APP");

const setFlags = namespacedActionCreator("setFlags");

export { setFlags };
