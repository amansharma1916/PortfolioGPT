import { goTogetherContext } from './projects/goTogether'
import { fraAtlasDssContext } from './projects/greenAtlas'
import { chatItContext } from './projects/chatIt'

import type { PortfolioContext } from '../types/chat'

export const portfolioContexts: PortfolioContext[] = [
  goTogetherContext,
  fraAtlasDssContext,
  chatItContext,
]
