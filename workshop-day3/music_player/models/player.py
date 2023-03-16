# -*- coding: utf-8 -*-

from odoo import models, fields

class MusicPlayer(models.Model):
    _name = 'music_player.music_player'
    _description = 'A simple music player to search and listen to your songs'

    name = fields.Char('Song Name')
    filename = fields.Char("File name")
    url = fields.Char(compute="_compute_url")

    def _compute_url(self):
        for record in self:
            record.url = record.get_base_url() + '/music/' + str(record.id)

#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100
