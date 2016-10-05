﻿namespace bluesky.core.models.customerOrder {
	/** A participant of a conference is related to a meet me secure access. */
	export interface IParticipantDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Identifier of the participant in the technical inventory. */
		TechnicalParticipantId: string;
		/** Identifier of the participant in the service platform. */
		PlatformParticipantId: string;
		/** Participant name. */
		Name: string;
		/** Meet me secure code, generated by the technical inventory or by the service platform. */
		MeetMeSecureCode: string;
		/** Participant email. */
		Email: string;
		/** Participant phone number. */
		PhoneNumber: string;
		/** Additional comments. */
		Comments: string;
		/** Gets or sets the Action for a participant: add, update or delete. */
		Action: string;
		/** Gets or sets the Participant type. A participant can have a Moderator or Participant type. */
		ParticipantType: string;
	}
}
