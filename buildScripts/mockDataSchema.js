var schema = {
  "type": "object",
  "properties": {
    "mappings": {
      "type": "array",
      "minItems": 10,
      "maxItems": 15,
      "statusCode": {
        "type": "string",
        "pattern": "200"
      },
      "messageText": {
        "type": "string",
        "pattern": "OK"
      },
      "items": {
        "type": "object",
        "properties": {
          "childID": {
            "type": "number",
            "unique": true,
            "minimum": 1,
            "maximum": 100
          },
          "custNum": {
            "type": "string",
            "pattern": "444390"
          },
          "typeID": {
            "type": "number",
            "minimum": 1,
            "maximum": 1
          },
          "parentID": {
            "type": "number",
            "minimum": 1,
            "maximum": 10
          },
          "originalValue": {
              "type": "string",
              "faker": {
                "fake": "{{name.firstName}} {{name.lastName}}"
              }
          },
          "mappedValue": {
              "type": "string",
              "faker": {
                "fake": "{{name.prefix}} {{name.firstName}} {{name.lastName}}"
              }
          },
          "mappedStatus": {
            "type": "string",
            "pattern": "100|100|0"
          }
        },
        required: ['childID', 'custNum', 'typeID', 'parentID', 'originalValue', 'mappedStatus']
      }
    }
  },
  required: ['mappings', 'statusCode', 'messageText']
};

module.exports = schema;
