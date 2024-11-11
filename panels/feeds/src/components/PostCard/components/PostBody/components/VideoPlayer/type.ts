import { ReactPlayerProps } from 'react-player'

/**
 *
 * @param video media path
 * @param full display type cover or contained
 * @param controls toggle the controls keys
 * @default full false display contained
 * @default controls true shows control keys
 */

export type VideoPlayerProps = {
    video: string
    full?: boolean
} & ReactPlayerProps