﻿declare namespace bluesky.core.models.technicalData {
	/** A participant of a conference is related to a meet me secure access. */
	interface ParticipantDto extends ResourceBase {
		/** Gets or sets the unique identifier. */
		id: number;
		/** Identifier of the participant in the technical inventory. */
		technicalParticipantId: string;
		/** Identifier of the participant in the service platform. */
		platformParticipantId: string;
		/** Participant name. */
		name: string;
		/** Meet me secure code, generated by the technical inventory or by the service platform. */
		meetMeSecureCode: string;
		/** Participant email. */
		email: string;
		/** Participant phone number. */
		phoneNumber: string;
		/** Additional comments. */
		comments: string;
		/** Gets or sets the Action for a participant: add, update or delete. */
		action: string;
		/** Gets or sets the Participant type. A participant can have a Moderator or Participant type. */
		participantType: string;
	}
}
