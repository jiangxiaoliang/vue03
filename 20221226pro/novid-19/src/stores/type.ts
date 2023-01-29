export interface ChinaTotal {
	noInfect: number;
	local_acc_confirm: number;
	deadAdd: number;
	mtime: string;
	mediumRiskAreaNum: number;
	localConfirm: number;
	mRiskTime: string;
	confirm: number;
	nowSevere: number;
	localConfirmH5: number;
	heal: number;
	dead: number;
	showLocalConfirm: number;
	localWzzAdd: number;
	nowLocalWzz: number;
	localConfirmAdd: number;
	suspect: number;
	importedCase: number;
	showlocalinfeciton: number;
	noInfectH5: number;
	confirmAdd: number;
	highRiskAreaNum: number;
	nowConfirm: number;
}

export interface ChinaAdd {
	dead: number;
	nowConfirm: number;
	importedCase: number;
	localConfirm: number;
	localConfirmH5: number;
	noInfectH5: number;
	confirm: number;
	heal: number;
	suspect: number;
	nowSevere: number;
	noInfect: number;
}

export interface ShowAddSwitch {
	all: boolean;
	suspect: boolean;
	heal: boolean;
	nowSevere: boolean;
	noInfect: boolean;
	localConfirm: boolean;
	confirm: boolean;
	dead: boolean;
	nowConfirm: boolean;
	importedCase: boolean;
	localinfeciton: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	continueDayZeroLocalConfirm: number;
	showRate: boolean;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	showHeal: boolean;
	mtime: string;
	adcode: string;
	continueDayZeroLocalConfirmAdd: number;
	nowConfirm: number;
	confirm: number;
	dead: number;
	heal: number;
	wzz: number;
	provinceLocalConfirm: number;
}

export interface Today {
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: number;
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
	confirm: number;
}

export interface Total {
	wzz: number;
	continueDayZeroConfirm: number;
	mtime: string;
	nowConfirm: number;
	dead: number;
	mediumRiskAreaNum: number;
	confirm: number;
	showHeal: boolean;
	continueDayZeroConfirmAdd: number;
	showRate: boolean;
	heal: number;
	provinceLocalConfirm: number;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	adcode: string;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: number;
	local_confirm_add: number;
}

export interface Total {
	confirm: number;
	adcode: string;
	nowConfirm: number;
	mediumRiskAreaNum: number;
	dead: number;
	heal: number;
	wzz: number;
	continueDayZeroLocalConfirm: number;
	showRate: boolean;
	showHeal: boolean;
	provinceLocalConfirm: number;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface Children {
	adcode: string;
	date: string;
	today: Today;
	total: Total;
	children: Children[];
	name: string;
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface Diseaseh5Shelf {
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
}

export interface StatisGradeCityDetail {
	confirmAdd: number;
	confirm: number;
	dead: number;
	heal: number;
	grade: string;
	sdate: string;
	nowConfirm: number;
	city: string;
	date: string;
	mtime: string;
	syear: number;
	wzz_add: string;
	province: string;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	statisGradeCityDetail: StatisGradeCityDetail[];
}
export interface ChinaTotal {
	noInfect: number;
	local_acc_confirm: number;
	deadAdd: number;
	mtime: string;
	mediumRiskAreaNum: number;
	localConfirm: number;
	mRiskTime: string;
	confirm: number;
	nowSevere: number;
	localConfirmH5: number;
	heal: number;
	dead: number;
	showLocalConfirm: number;
	localWzzAdd: number;
	nowLocalWzz: number;
	localConfirmAdd: number;
	suspect: number;
	importedCase: number;
	showlocalinfeciton: number;
	noInfectH5: number;
	confirmAdd: number;
	highRiskAreaNum: number;
	nowConfirm: number;
}

export interface ChinaAdd {
	dead: number;
	nowConfirm: number;
	importedCase: number;
	localConfirm: number;
	localConfirmH5: number;
	noInfectH5: number;
	confirm: number;
	heal: number;
	suspect: number;
	nowSevere: number;
	noInfect: number;
}

export interface ShowAddSwitch {
	all: boolean;
	suspect: boolean;
	heal: boolean;
	nowSevere: boolean;
	noInfect: boolean;
	localConfirm: boolean;
	confirm: boolean;
	dead: boolean;
	nowConfirm: boolean;
	importedCase: boolean;
	localinfeciton: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	continueDayZeroLocalConfirm: number;
	showRate: boolean;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	showHeal: boolean;
	mtime: string;
	adcode: string;
	continueDayZeroLocalConfirmAdd: number;
	nowConfirm: number;
	confirm: number;
	dead: number;
	heal: number;
	wzz: number;
	provinceLocalConfirm: number;
}

export interface Today {
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: number;
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
	confirm: number;
}

export interface Total {
	wzz: number;
	continueDayZeroConfirm: number;
	mtime: string;
	nowConfirm: number;
	dead: number;
	mediumRiskAreaNum: number;
	confirm: number;
	showHeal: boolean;
	continueDayZeroConfirmAdd: number;
	showRate: boolean;
	heal: number;
	provinceLocalConfirm: number;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	adcode: string;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: number;
	local_confirm_add: number;
}

export interface Total {
	confirm: number;
	adcode: string;
	nowConfirm: number;
	mediumRiskAreaNum: number;
	dead: number;
	heal: number;
	wzz: number;
	continueDayZeroLocalConfirm: number;
	showRate: boolean;
	showHeal: boolean;
	provinceLocalConfirm: number;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface Children {
	adcode: string;
	date: string;
	today: Today;
	total: Total;
	children: Children[];
	name: string;
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface Diseaseh5Shelf {
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
}

export interface StatisGradeCityDetail {
	confirmAdd: number;
	confirm: number;
	dead: number;
	heal: number;
	grade: string;
	sdate: string;
	nowConfirm: number;
	city: string;
	date: string;
	mtime: string;
	syear: number;
	wzz_add: string;
	province: string;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	statisGradeCityDetail: StatisGradeCityDetail[];
}