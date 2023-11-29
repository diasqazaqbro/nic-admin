import { model, models, Schema } from 'mongoose'

const PortfolioSchema = new Schema({
    oneTitle: { type: String },
	oneDesc: { type: String },
	twoTitle: { type: String },
	twoDesc: { type: String },
	threeTitle: { type: String },
	threeDesc: { type: String },
	fourTitle: { type: String },
	fourDesc: { type: String },
	fiveTitle: { type: String },
	fiveDesc: { type: String },
	sixTitle: { type: String },
	sixDesc: { type: String },
	sevenTitle: { type: String },
	sevenDesc: { type: String },
	eightTitle: { type: String },
	eightDesc: { type: String },
})

export const Portfolio = models?.Portfolio || model('Portfolio', PortfolioSchema)
