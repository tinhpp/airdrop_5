/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const chartersService = require('./charters.service');

class ChartersController {
  async index(req, res) {
    try {
      const data = await chartersService.getAll(req.query);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).send();
    }
  }

  async create(req, res) {
    try {
      const newTopic = await chartersService.createOne(req.body);
      res.status(201).json(newTopic);
    } catch (error) {
      res.status(500).send();
    }
  }

  async update(req, res) {
    try {
      await chartersService.updateOne(req.params.id, req.body);
      res.status(200).send();
    } catch (error) {
      res.status(500).send();
    }
  }
}

module.exports = new ChartersController();
