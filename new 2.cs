public double calculatePrice()
{
    var cost = 0.0;
	
	

    if (ParcelType == "Weapons")
    {
        cost = cost * 2;
    } else if (ParcelType == "Cautious parcels")
    {
        cost = cost * 1.75;
    } else if (ParcelType == "Refrigerated goods")
    {
        cost = cost * 1.1;
    }
    else
    {
        throw new ArgumentException("Not a valid parcel type", ParcelType);
    }

    return cost;
}