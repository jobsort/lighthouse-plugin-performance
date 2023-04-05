/*
 * Copyright (c) 2023-present Y Performance. All rights reserved.
 */

export default {
  audits: [{
    path: "lighthouse-plugin-performance/audits/server-timing.js",
  }],

  category: {
    title: "Y Performance",
    description: "Advanced web performance optimization techniques.",
    auditRefs: [{
      id: "server-timing",
      weight: 1,
    }],
  },
};
