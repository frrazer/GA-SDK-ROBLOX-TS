type EGAResourceFlowType = {
    Source: "Source",
	Sink: "Sink",
}

type EGAProgressionStatus = {
    Start: "Start",
    Complete: "Complete",
    Fail: "Fail",
}

type EGAErrorSeverity = {
    debug: "debug",
    info: "info",
    warning: "warning",
    error: "error",
    critical: "critical",
}

type EventOptions = {
	customFields: { [key: string]: string } | undefined,
}

type BusinessEventOptions = EventOptions & {
	amount: number,
	itemType: string,
	itemId: string,
	cartType: string | undefined,
}

type ResourceEventOptions = EventOptions & {
	flowType: number,
	currency: string,
	amount: number,
	itemType: string,
	itemId: string,
}

type ProgressionEventOptions = EventOptions & {
	progressionStatus: number,
	progression01: string,
	progression02: string | undefined,
	progression03: string | undefined,
	score: number | undefined,
}

type DesignEventOptions = EventOptions & {
	eventId: string,
	value: number | undefined,
}

type ErrorEventOptions = EventOptions & {
	message: string,
	severity: number,
}

type CustomDimension = string

type ProductInfo = {
	Name: string,
	PriceInRobux: number,
}

type ProcessReceiptInfo = {
	ProductId: number,
	PlayerId: number,
	CurrencySpent: number,
}

type TeleportData = { [key: string]: any }
type RemoteConfigs = { [key: string]: any }

type GameAnalyticsOptions = {
	enableInfoLog: boolean | undefined,
	enableVerboseLog: boolean | undefined,
	availableCustomDimensions01: CustomDimension[] | undefined,
	availableCustomDimensions02: CustomDimension[] | undefined,
	availableCustomDimensions03: CustomDimension[] | undefined,
	availableResourceCurrencies: string[] | undefined,
	availableResourceItemTypes: string[] | undefined,
	build: string | undefined,
	availableGamepasses: string[] | undefined,
	enableDebugLog: boolean | undefined,
	automaticSendBusinessEvents: boolean | undefined,
	reportErrors: boolean | undefined,
	useCustomUserId: boolean | undefined,
	gameKey: string | undefined,
	secretKey: string | undefined,
}

declare namespace GameAnalyticsLibrary {
    /**
     * The GameAnalytics SDK.
     * @server
     */
    export const GameAnalyticsServer: {
        EGAResourceFlowType: EGAResourceFlowType;
        EGAProgressionStatus: EGAProgressionStatus;
        EGAErrorSeverity: EGAErrorSeverity;

        configureAvailableCustomDimensions01(customDimensions: string[]): void;
        configureAvailableCustomDimensions02(customDimensions: string[]): void;
        configureAvailableCustomDimensions03(customDimensions: string[]): void;
        configureAvailableResourceCurrencies(resourceCurrencies: string[]): void;
        configureAvailableResourceItemTypes(resourceItemTypes: string[]): void;
        configureAvailableGamepasses(gamepasses: string[]): void;
        configureBuild(build: string): void;
        addBusinessEvent(playerId: number | BusinessEventOptions, options?: BusinessEventOptions): void;
        addResourceEvent(playerId: number | ResourceEventOptions, options?: ResourceEventOptions): void;
        addProgressionEvent(playerId: number | ProgressionEventOptions, options?: ProgressionEventOptions): void;
        addDesignEvent(playerId: number | DesignEventOptions, options?: DesignEventOptions): void;
        addErrorEvent(playerId: number | ErrorEventOptions, options?: ErrorEventOptions): void;
        setCustomDimension01(playerId: number, dimension: CustomDimension): void;
        setCustomDimension02(playerId: number, dimension: CustomDimension): void;
        setCustomDimension03(playerId: number, dimension: CustomDimension): void;
        setEnabledDebugLog(flag: boolean): void;
        setEnabledInfoLog(flag: boolean): void;
        setEnabledVerboseLog(flag: boolean): void;
        setEnabledReportErrors(flag: boolean): void;
        setEnabledEventSubmission(flag: boolean): void;
        setEnabledAutomaticSendBusinessEvents(flag: boolean): void;
        setEnabledCustomUserId(flag: boolean): void;
        addGameAnalyticsTeleportData(playerIds: number[], teleportData: TeleportData): TeleportData;
        getRemoteConfigsValueAsString(playerId: number | RemoteConfigs, options: RemoteConfigs): string;
        isRemoteConfigsReady(playerId: number): boolean;
        getRemoteConfigsContentAsString(playerId: number): string;
        isPlayerReady(playerId: number): boolean;
        initServer(gameKey: string, secretKey: string): void;
        initialize(options: GameAnalyticsOptions): void;
        ProcessReceiptCallback(info: ProcessReceiptInfo): void;
        GamepassPurchased(player: Player, id: number, customGamepassInfo?: ProductInfo): void;
    };

    /**
     * The GameAnalytics SDK.
     * @client
     */
   export const GameAnalyticsClient: {
        initClient(): void;
   }
}

export = GameAnalyticsLibrary;