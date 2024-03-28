import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`
  }
]

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          你好👋，我是CV master!
        </h1>
        <p className="leading-normal text-muted-foreground">
          我是一个帮助人们写简历的聊天工具。我会问你一些问题，以获取写简历所需的信息。
        </p>
        <p className="leading-normal text-muted-foreground">
        你可以点击下方的开始按钮，进入问答之旅。
        回复“完成”，可以直接结束问答，开始生成简历。
        </p>
      </div>
    </div>
  )
}
