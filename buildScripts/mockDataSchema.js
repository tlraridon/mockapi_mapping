var schema = {
  "type": "object",
  "properties": {
    "mappings": {
      "type": "array",
      "minItems": 30,
      "maxItems": 50,
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
            "maximum": 100
          },
          "originalValue": {
            "type": "string",
            "pattern": "Bad 1|Bad 2|Bad 3|Bad 4|Bad 5"
          },
          "mappedValue": {
            "type": "string",
            "pattern": "Good 1|Good 2|Good 3|Good 4|Good 5"
          },
          "mappedStatus": {
            "type": "string",
            "pattern": "100|100|0"
          }
        },
        required: ['childID', 'custNum', 'typeID', 'parentID', 'originalValue', 'mappedValue', 'mappedStatus']
      }
    }
  },
  required: ['mappings']
};

module.exports = schema;