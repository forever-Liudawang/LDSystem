'use strict';

const BaseController = require("./BaseController")
class PlayerController extends BaseController {
  async getPlayerTotal(){
    const {ctx} = this
    const resp = await ctx.model.PlayerTotal.find()
    ctx.body = this.success(resp)
  }
}

module.exports = PlayerController;
