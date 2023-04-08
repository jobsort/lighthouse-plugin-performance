/*
 * Copyright (c) 2023-present Jobsort. All rights reserved.
 */

import {
  Audit,
  NetworkRecords,
} from "lighthouse";

class ServerTimingAudit extends Audit {
  static get meta() {
    return {
      id: "server-timing",
      title: "Has `Server-Timing`",
      failureTitle: "`Server-Timing` HTTP header is missing",
      description:
        "It's considered best practice to instrument internal server latencies to help with debugging. " +
        "Consider adding a Server-Timing HTTP header to your HTML page response.",
      requiredArtifacts: ["devtoolsLogs"],
    };
  }

  static async audit(artifacts, context) {
    const devtoolsLog = artifacts.devtoolsLogs[Audit.DEFAULT_PASS];
    const requests = await NetworkRecords.request(devtoolsLog, context);

    const goodRequests = requests.filter((request) =>
      request.responseHeaders.some((header) => header.name.toLowerCase() === "server-timing")
    );

    return {
      score: goodRequests.length > 0 ? 1 : 0,
      numericValue: goodRequests.length,
    };
  }
}

export default ServerTimingAudit;
