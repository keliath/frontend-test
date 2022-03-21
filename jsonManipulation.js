// JSON
let values = {
  1: {
    carrier: "CCH",
    service: "DEX",
  },
  17: {
    carrier: "CHP",
    service: "express",
  },
};

// JSON
let json = {
  data: {
    BUIN: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
    LAJA: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LEBU: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LOTA: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
  },
};

const getNewJsonFromValues = (values, json) => {
  const newJson = Object.fromEntries(
    Object.entries(json).map(([key, val]) => {
      const over = { ...values[val.over_carrier_service_id] };
      const under = { ...values[val.under_carrier_service_id] };
      return [key, { limit: val.limit, over, under }];
    })
  );

  return newJson;
};

console.log(getNewJsonFromValues(values, json.data));
