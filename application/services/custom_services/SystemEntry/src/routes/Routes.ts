import { Request, Response, NextFunction } from "express";
import { UserController } from '../controller/UserController';


export class Routes {
    private User: UserController = new UserController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/User').get(this.User.GpSEF);
     }

}t(this.User.GpSEF);
     }

}