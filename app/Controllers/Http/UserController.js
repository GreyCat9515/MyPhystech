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
  async signin(ctx) {
    const { request, response, auth } = ctx;

    const { email, password } = request.all();
    try {
      await auth.attempt(email, password);
    } catch (e) {
      // return view.render("signin", { error: "true" });
      return this.signinPage(ctx, true);
    }

    return response.redirect("back");
  }
  async logout({ response, auth }) {
    await auth.logout();
  }
}

module.exports = UserController;
