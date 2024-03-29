const calculateDeliveryCost = (
  km_price: number,
  base_distance_in_km: number,
  total_distance: number,
  fix_price: number,
  item_type: string
) => {
  let totalCost = 0;
  if (total_distance <= base_distance_in_km) {
    totalCost = fix_price;
  } else {
    const additionalDistance = total_distance - base_distance_in_km;
    const additionalCost = additionalDistance * km_price;
    totalCost = fix_price + additionalCost;
  }

  if (item_type === "perishable") {
    totalCost += totalCost * 0.5;
  }
  return totalCost;
};

export default calculateDeliveryCost;
