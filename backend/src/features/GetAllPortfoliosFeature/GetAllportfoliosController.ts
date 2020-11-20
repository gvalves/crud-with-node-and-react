import { Request, Response } from 'express';
import { Portfolio } from '../../entities';
import { APIResponse } from '../../types';
import { GetAllPortfoliosFeature } from './GetAllPortfoliosFeature';

export class GetAllPortfoliosController {
  constructor(private getAllPortfoliosFeature: GetAllPortfoliosFeature) {}

  async handle(
    req: Request,
    res: Response
  ): Promise<Response<APIResponse<Portfolio>>> {
    const apiResponse: APIResponse<Portfolio> = {
      msg: 'Getted all portfolios with success!',
      error: false,
      data: [],
    };

    try {
      apiResponse.data = await this.getAllPortfoliosFeature.execute();

      return res.status(200).json(apiResponse);
    } catch (err) {
      apiResponse.msg = err || 'Unexpected error!';
      apiResponse.error = true;

      return res.status(400).json(apiResponse);
    }
  }
}
