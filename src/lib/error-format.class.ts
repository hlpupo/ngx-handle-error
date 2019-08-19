export class ErrorFormat {
  enviroment: string = "";
  app: string = "";
  time: string = "";
  message: string = "";
  stack: string = "";
  endpoint: string = "";
  params: string = "";
  tag: string = "";

  constructor(obj: Partial<ErrorFormat>) {
    Object.assign(this, obj);
  }
}
