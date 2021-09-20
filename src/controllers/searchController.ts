import { Request, Response } from 'express';

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;

  // Verifica se não tiver dados digitado na perquisa, ele redireciona para a pagina home
  if (!query) {
    res.redirect('/');
    return;
  }

  // Faz a pesquisa de acordo com a palavra pesquisada
  let list = Pet.getFromName(query);

  res.render('pages/page', {
    menu: createMenuObject(''),
    list,
    query
  })
}

