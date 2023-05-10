export type OpenStreetMapLocation = {
    place_id?: number,
    license?: string,
    osm_type?: string,
    osm_id?: number,
    boundingbox?: string[],
    lat?: string,
    lon: string,
    display_name?: string,
    class?: string,
    type?: string,
    importance?: number,
    icon?: string,
    address?: {
        shop?: string,
        house_number?: string,
        road?: string,
        suburb?: string,
        village?: string,
        town?: string,
        municipality?: string,
        county?: string,
        state?: string,
        postcode?: string,
        country?: string,
        country_code?: string,
    }

}