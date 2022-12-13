class GlobalService{
    public consent = false;
    public helixRotation = {x:0,y:0,z:0};
    public helixPosition = {x:0,y:0,z:0}

    public tileOpacity = 0;
    public audioStatus = true;
    public audioChoice = true;
}

export const globalService = new GlobalService();