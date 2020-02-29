"use strict";

class UserController {
  async signinPage(ctx, error = false) {
    const { view, response, auth } = ctx;
    try {
      await auth.check();
    } catch (e) {
      return view.render("signin", { error: error + "" });
    }
    return response.redirect("/");
  }
}

module.exports = UserController;
