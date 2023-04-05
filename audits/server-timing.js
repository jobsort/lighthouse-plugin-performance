/*
 * Copyright (c) 2023-present Y Performance. All rights reserved.
 */

import { Audit } from "lighthouse";

class CatAudit extends Audit {
  static get meta() {
    return {
      id: "server-timing",
      title: "Page is tracking internal server latencies",
      failureTitle: "Page doesn't respond with Server-Timing HTTP header",
      description:
        'Pages should have lots of cat images to keep users happy. ' +
        'Consider adding a picture of a cat to your page improve engagement.',
      requiredArtifacts: ['ImageElements'],
    };
  }

  static audit(artifacts) {
    // Artifacts requested in `requiredArtifacts` above are passed to your audit.
    // See the "API -> Plugin Audits" section below for what artifacts are available.
    const images = artifacts.ImageElements;
    const catImages = images.filter(image => image.src.toLowerCase().includes('cat'));

    return {
      // Give users a 100 if they had a cat image, 0 if they didn't.
      score: catImages.length > 0 ? 1 : 0,
      // Also return the total number of cat images that can be used by report JSON consumers.
      numericValue: catImages.length,
    };
  }
}

export default CatAudit;
