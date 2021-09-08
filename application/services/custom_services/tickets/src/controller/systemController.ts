import { Request, Response } from 'express';
import { systemService } from '../service/systemService';
import { CustomLogger } from '../config/Logger'
let system = new systemService();

export class systemController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
system.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into systemController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from systemController.ts: GpCreate');
    })}


}