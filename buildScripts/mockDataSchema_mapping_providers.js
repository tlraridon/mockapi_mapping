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
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
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
          "mappedValue": {
            "type": "string",
            "pattern": "Dr Jones|Dr Smith|Dr Williams|Dr Roberts|Dr Smith"
          },
          "mappedStatus": {
            "type": "string",
            "pattern": "100|100|0"
          }
        },
        required: ['id', 'custNum', 'typeID', 'mappedValue', 'mappedStatus']
      }
    }
  },
  required: ['mappings']
};

module.exports = schema;