function currencyMeasureFor(connector, currencyCode) {
  const measure = {
    EUR: connector.MEASURES.UNIT.CURRENCYUNIT.EURO,
    GBP: connector.MEASURES.UNIT.CURRENCYUNIT.POUNDSTERLING,
    USD: connector.MEASURES.UNIT.CURRENCYUNIT.USDOLLAR
  }[currencyCode];

  if (!measure) {
    throw new Error(
      `Unknown connector currency mapping for currenct code ${currencyCode}`
    );
  }

  return measure;
}

export default currencyMeasureFor;
