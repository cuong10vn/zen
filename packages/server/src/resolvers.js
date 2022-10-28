import GraphQLDate from './helpers/GraphQLDate'

export default {
  // Scalars
  Date: GraphQLDate,
  Query: {
    hello(obj, { subject }) {
      return `Hello, ${subject}! from Server`;
    },
    getTimeline() {
      return {
        "timelineItems": [
          {
            "id": "b6a0b0eb-fe46-4100-0001-7a782f37c056",
            "title": "N26",
            "deeplink": "/transactions/feed/f2bcc6f5-4d00-43c1-b209-a99fb583ced7/c7f2fce0-ddc8-11eb-8c40-81547a2a4a72?source=TX_LIST",
            "subtitle": {
              "template": "5 Jul",
              "params": null,
              "__typename": "FeedTimelineItemSubtitle"
            },
            "tintedSubtitle": {
              "elements": [
                {
                  "tint": null,
                  "value": "5 Jul",
                  "__typename": "FeedTintedItemSubtitleElements"
                }
              ],
              "__typename": "FeedTintedItemSubtitle"
            },
            "amount": -9.9,
            "amountStyle": "NONE",
            "currency": "EUR",
            "type": "TRANSACTION",
            "timestamp": 1625513998272,
            "category": "micro-v2-miscellaneous",
            "highlight": "NONE",
            "balance": {
              "amount": 8967.3,
              "currency": "EUR",
              "title": "Balance on {{date}}",
              "__typename": "FeedBalance"
            },
            "icon": {
              "type": "MERCHANT",
              "url": "https://cdn.dev-tech26.de/feed/transaction-details/header/n26-logo.png",
              "value": null,
              "statusIcon": null,
              "__typename": "FeedTimelineItemIcon"
            },
            "originalTransaction": null,
            "roundupTransaction": null,
            "__typename": "FeedTimelineItem"
          },
          {
            "id": "6d4f344b-d5b7-11eb-9976-aa9765802842",
            "title": "To My own space!",
            "deeplink": "/transactions/feed/f2bcc6f5-4d00-43c1-b209-a99fb583ced7/6d4f311e-d5b7-11eb-99d9-39918763f3eb?source=TX_LIST",
            "subtitle": {
              "template": "25 Jun  ·  Monthly Rule",
              "params": null,
              "__typename": "FeedTimelineItemSubtitle"
            },
            "tintedSubtitle": {
              "elements": [
                {
                  "tint": null,
                  "value": "25 Jun  ·  Monthly Rule",
                  "__typename": "FeedTintedItemSubtitleElements"
                }
              ],
              "__typename": "FeedTintedItemSubtitle"
            },
            "amount": -2,
            "amountStyle": "NONE",
            "currency": "EUR",
            "type": "TRANSACTION",
            "timestamp": 1624626935457,
            "category": "micro-v2-miscellaneous",
            "highlight": "NONE",
            "balance": {
              "amount": 8977.2,
              "currency": "EUR",
              "title": "Balance on {{date}}",
              "__typename": "FeedBalance"
            },
            "icon": {
              "type": "CATEGORY",
              "url": "https://cdn.dev-tech26.de/spaces/rounded-images/family_heart.png",
              "value": null,
              "statusIcon": null,
              "__typename": "FeedTimelineItemIcon"
            },
            "originalTransaction": null,
            "roundupTransaction": null,
            "__typename": "FeedTimelineItem"
          },
          {
            "id": "36c54279-d5b7-11eb-9976-aa9765802842",
            "title": "To My own space!",
            "deeplink": "/transactions/feed/f2bcc6f5-4d00-43c1-b209-a99fb583ced7/36c5401b-d5b7-11eb-8867-d1923a83cce0?source=TX_LIST",
            "subtitle": {
              "template": "25 Jun",
              "params": null,
              "__typename": "FeedTimelineItemSubtitle"
            },
            "tintedSubtitle": {
              "elements": [
                {
                  "tint": null,
                  "value": "25 Jun",
                  "__typename": "FeedTintedItemSubtitleElements"
                }
              ],
              "__typename": "FeedTintedItemSubtitle"
            },
            "amount": -100,
            "amountStyle": "NONE",
            "currency": "EUR",
            "type": "TRANSACTION",
            "timestamp": 1624626843956,
            "category": "micro-v2-miscellaneous",
            "highlight": "NONE",
            "balance": {
              "amount": 8979.2,
              "currency": "EUR",
              "title": "Balance on {{date}}",
              "__typename": "FeedBalance"
            },
            "icon": {
              "type": "CATEGORY",
              "url": "https://cdn.dev-tech26.de/spaces/rounded-images/family_heart.png",
              "value": null,
              "statusIcon": null,
              "__typename": "FeedTimelineItemIcon"
            },
            "originalTransaction": null,
            "roundupTransaction": null,
            "__typename": "FeedTimelineItem"
          },
          {
            "id": "466d7355-eb98-4700-0001-79ddb06fc056",
            "title": "N26",
            "deeplink": "/transactions/feed/f2bcc6f5-4d00-43c1-b209-a99fb583ced7/cf8e7cc3-c635-11eb-a466-25aa88a7ff14?source=TX_LIST",
            "subtitle": {
              "template": "5 Jun",
              "params": null,
              "__typename": "FeedTimelineItemSubtitle"
            },
            "tintedSubtitle": {
              "elements": [
                {
                  "tint": null,
                  "value": "5 Jun",
                  "__typename": "FeedTintedItemSubtitleElements"
                }
              ],
              "__typename": "FeedTintedItemSubtitle"
            },
            "amount": -9.9,
            "amountStyle": "NONE",
            "currency": "EUR",
            "type": "TRANSACTION",
            "timestamp": 1622921998272,
            "category": "micro-v2-miscellaneous",
            "highlight": "NONE",
            "balance": {
              "amount": 9079.2,
              "currency": "EUR",
              "title": "Balance on {{date}}",
              "__typename": "FeedBalance"
            },
            "icon": {
              "type": "MERCHANT",
              "url": "https://cdn.dev-tech26.de/feed/transaction-details/header/n26-logo.png",
              "value": null,
              "statusIcon": null,
              "__typename": "FeedTimelineItemIcon"
            },
            "originalTransaction": null,
            "roundupTransaction": null,
            "__typename": "FeedTimelineItem"
          },
          {
            "id": "81586edf-c1f0-11eb-ac11-f610bd9cc921",
            "title": "To Shareland",
            "deeplink": "/transactions/feed/f2bcc6f5-4d00-43c1-b209-a99fb583ced7/81586e7c-c1f0-11eb-afa1-714896f6c7e6?source=TX_LIST",
            "subtitle": {
              "template": "31 May",
              "params": null,
              "__typename": "FeedTimelineItemSubtitle"
            },
            "tintedSubtitle": {
              "elements": [
                {
                  "tint": null,
                  "value": "31 May",
                  "__typename": "FeedTintedItemSubtitleElements"
                }
              ],
              "__typename": "FeedTintedItemSubtitle"
            },
            "amount": -1,
            "amountStyle": "NONE",
            "currency": "EUR",
            "type": "TRANSACTION",
            "timestamp": 1622452427130,
            "category": "micro-v2-miscellaneous",
            "highlight": "NONE",
            "balance": {
              "amount": 9089.1,
              "currency": "EUR",
              "title": "Balance on {{date}}",
              "__typename": "FeedBalance"
            },
            "icon": {
              "type": "CATEGORY",
              "url": "https://cdn.dev-tech26.de/spaces/rounded-images/saving_piggy.png",
              "value": null,
              "statusIcon": null,
              "__typename": "FeedTimelineItemIcon"
            },
            "originalTransaction": null,
            "roundupTransaction": null,
            "__typename": "FeedTimelineItem"
          }
        ]

      }
    }
  }
};
