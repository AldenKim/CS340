import { Status } from "tweeter-shared";
import { PageItemPresenter } from "./PageItemPresenter";
import { StatusService } from "../model/service/StatusService";

export abstract class StatusItemPresenter extends PageItemPresenter<
  Status,
  StatusService
> {
  protected createService(): StatusService {
    return new StatusService();
  }
}
