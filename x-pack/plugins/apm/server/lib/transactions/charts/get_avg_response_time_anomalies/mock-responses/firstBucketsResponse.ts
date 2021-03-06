/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { ESResponse } from '../get_anomaly_aggs/fetcher';

export const firstBucketsResponse: ESResponse = {
  took: 22,
  timed_out: false,
  _shards: {
    total: 5,
    successful: 5,
    skipped: 0,
    failed: 0
  },
  hits: {
    total: 2,
    max_score: 0,
    hits: []
  },
  aggregations: {
    ml_avg_response_times: {
      buckets: [
        {
          key_as_string: '2018-07-02T09:00:00.000Z',
          key: 1530522000000,
          doc_count: 0,
          anomaly_score: {
            value: null
          },
          upper: {
            value: null
          },
          lower: {
            value: null
          }
        },
        {
          key_as_string: '2018-07-02T09:08:20.000Z',
          key: 1530522500000,
          doc_count: 2,
          anomaly_score: {
            value: 0
          },
          upper: {
            value: 50381.01051622894
          },
          lower: {
            value: 17688.182675688193
          }
        },
        {
          key_as_string: '2018-07-02T09:16:40.000Z',
          key: 1530523000000,
          doc_count: 0,
          anomaly_score: {
            value: null
          },
          upper: {
            value: null
          },
          lower: {
            value: null
          }
        }
      ]
    },
    top_hits: {
      hits: {
        total: 2,
        max_score: 0,
        hits: [
          {
            _index: '.ml-anomalies-shared',
            _type: 'doc',
            _id:
              'opbeans-node-request-high_mean_response_time_model_plot_1530522900000_900_0_29791_0',
            _score: 0,
            _source: {
              bucket_span: 900
            }
          }
        ]
      }
    }
  }
};
