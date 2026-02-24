import { goTogetherContext } from './projects/goTogether'
import { fraAtlasDssContext } from './projects/greenAtlas'
import { chatItContext } from './projects/chatIt'
import { tshareContext } from './projects/tshare'
import { ghostMediaContext } from './projects/ghostMedia'

import type { PortfolioContext } from '../types/chat'

export const portfolioContexts: PortfolioContext[] = [
  goTogetherContext,
  fraAtlasDssContext,
  chatItContext,
  tshareContext,
  ghostMediaContext,
]
