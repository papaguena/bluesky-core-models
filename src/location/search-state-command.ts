﻿namespace bluesky.core.models.location {
	/** Search parameter used to retrieve a list of state (country subdivisions). */
	export interface ISearchStateCommand {
		/** Country ISO code. */
		CountryCode: string;
	}
}
