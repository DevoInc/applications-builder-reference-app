import { addRequests } from "./requestsReal";
import { addRequests as addRequestsMocked } from "./requestsMocked";

const mocked = true;

if(mocked) {
  addRequestsMocked();
} else {
  addRequests();
}