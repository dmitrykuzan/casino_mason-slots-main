"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { mobileCheck } from "./functions/";
import { accordion   } from "./functions/";
import { burger      } from "./functions/";

// Components
// import { formValidation } from "./components/";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  accordion('.faq__body', "faq__question", ".faq__wrapper", "active");
  burger();
});
