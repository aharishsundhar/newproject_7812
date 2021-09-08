import * as mongoose from 'mongoose';
import systemModel from '../models/system';
import { CustomLogger } from '../config/Logger'


export class systemDao {
    private system = systemModel;
    constructor() { }
    
    public async GpCreate(systemData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into systemDao.ts: GpCreate');

    let temp = new systemModel(systemData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from systemDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}