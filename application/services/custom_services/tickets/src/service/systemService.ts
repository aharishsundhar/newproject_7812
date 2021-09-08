import { Request, Response } from 'express';
import {systemDao} from '../dao/systemDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let system = new systemDao();

export class systemService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into systemService.ts: GpCreate')
     let  systemData = req.body;
     system.GpCreate(systemData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from systemService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}