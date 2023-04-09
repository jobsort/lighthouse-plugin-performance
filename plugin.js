/*
 * Copyright (c) 2023-present Jobsort. All rights reserved.
 */

export default {
  audits: [{
    path: "lighthouse-plugin-performance/audits/server-timing.js",
  }],

  category: {
    title: "Performance++",
    description: "Advanced web performance optimization best practices from https://webperformance.blog",
    auditRefs: [{
      id: "server-timing",
      group: "http",
      weight: 1,
    }],
  },

  groups: {
    "http": {
      title: "HTTP Headers",
      description: "Monitors performance-focused HTTP headers"
    },
  },
};
