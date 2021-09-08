import { Request, Response, NextFunction } from "express";
import { systemController } from '../controller/systemController';


export class Routes {
    private system: systemController = new systemController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/system').post(this.system.GpCreate);
     }

}