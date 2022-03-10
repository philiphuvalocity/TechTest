import { ResponseStatus, ResponseStatusText } from '@const/response-status';

export class HttpResponseExpectations {
  httpResponseStatusNoContent (res: any) {
    expect(res.status).toBe(ResponseStatus.NoContent);
    expect(res.statusText).toBe(ResponseStatusText.NoContent);
  }

  httpResponseStatusCreated (res: any) {
    expect(res.status).toBe(ResponseStatus.Created);
    expect(res.statusText).toBe(ResponseStatusText.Created);
  }

  httpResponseStatusOK (res: any) {
    expect(res.status).toBe(ResponseStatus.Ok);
    expect(res.statusText).toBe(ResponseStatusText.Ok);
  }

  httpResponseStatusBadRequest (res: any) {
    expect(res.status).toBe(ResponseStatus.BadRequest);
    expect(res.statusText).toBe(ResponseStatusText.BadRequest);
  }

  httpResponseStatusNotFound (res: any) {
    expect(res.status).toBe(ResponseStatus.NotFound);
    expect(res.statusText).toBe(ResponseStatusText.NotFound);
  }
}
