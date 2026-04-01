import { isEnvDefinedFalsy } from '../../utils/envUtils.js'

export type ColorModuleUnavailableReason = 'env' | 'stub'

// Minimal stub shape matching the properties read by downstream consumers.
type SyntaxTheme = {
  theme: string
  source?: string
}

/**
 * NOTE: The `color-diff-napi` package is an Anthropic-internal native addon.
 * A package with the same name exists on npm and could be a supply chain risk.
 * All exports are stubbed as null/no-ops in the open-source build.
 */

/**
 * Returns a static reason why the color-diff module is unavailable.
 * In the open-source build, this always returns a reason (never null).
 */
export function getColorModuleUnavailableReason(): ColorModuleUnavailableReason {
  if (isEnvDefinedFalsy(process.env.CLAUDE_CODE_SYNTAX_HIGHLIGHT)) {
    return 'env'
  }
  // Native module not available in open-source build
  return 'stub'
}

export function expectColorDiff(): null {
  return null
}

export function expectColorFile(): null {
  return null
}

export function getSyntaxTheme(_themeName: string): SyntaxTheme | null {
  return null
}
