import * as zod from "zod"
import { Loginschema } from "./login.schema"
export type LoginFormType = zod.infer<typeof Loginschema>