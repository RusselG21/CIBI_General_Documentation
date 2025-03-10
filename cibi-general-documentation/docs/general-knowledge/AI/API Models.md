# AI API Documentation Reference

## ChatGPT API (OpenAI)

### Overview
OpenAI provides access to ChatGPT models through their API, allowing developers to integrate conversational AI capabilities into applications, websites, and services.

### Key Features
- Multiple GPT models with different capabilities and price points
- Function calling for structured outputs
- Image generation and analysis
- Fine-tuning options
- Embeddings for semantic search

### Main Endpoints
- `/chat/completions` - For chat-based interactions
- `/images/generations` - For DALL-E image generation
- `/embeddings` - For creating vector embeddings
- `/audio/speech` - For text-to-speech generation
- `/audio/transcriptions` - For speech-to-text conversion

### Documentation Resources
- Main Documentation: [https://platform.openai.com/docs](https://platform.openai.com/docs)
- API Reference: [https://platform.openai.com/docs/api-reference](https://platform.openai.com/docs/api-reference)
- OpenAI Cookbook (examples): [https://cookbook.openai.com/](https://cookbook.openai.com/)

### Pricing and Token Information
- [https://openai.com/pricing](https://openai.com/pricing)
- Pricing is based on token usage (input and output tokens)
- Token conversion is the same as Claude (1 token ≈ 3/4 of a word)

#### GPT-4o Pricing:
- Input: $5/MTok ($0.005 per 1K tokens)
- Output: $15/MTok ($0.015 per 1K tokens)
- Context window: 128K tokens

#### GPT-4 Turbo Pricing:
- Input: $10/MTok ($0.01 per 1K tokens)
- Output: $30/MTok ($0.03 per 1K tokens)
- Context window: 128K tokens

#### GPT-3.5 Turbo Pricing:
- Input: $0.50/MTok ($0.0005 per 1K tokens)
- Output: $1.50/MTok ($0.0015 per 1K tokens)
- Context window: 16K tokens

#### Examples:
- 1,000 word document input with GPT-4o: ~1,333 tokens = $0.0067
- 1,000 word response with GPT-4o: ~1,333 tokens = $0.02
- Full conversation (5,000 words) with GPT-3.5 Turbo: ~$0.01

## Anthropic Claude API

### Overview
Anthropic provides access to Claude models through their API, enabling developers to integrate Claude's natural language understanding and generation capabilities into applications.

### Key Features
- Multiple Claude model options (Claude 3 Opus, Sonnet, Haiku)
- Long context windows (up to 200K tokens)
- Structured tool use capabilities
- Prompt caching for cost efficiency
- Multi-modal capabilities (text and images)

### Main Endpoints
- `/v1/messages` - For message-based interactions
- `/v1/completions` - Legacy API for text completions

### Documentation Resources
- Main Documentation: [https://docs.anthropic.com/](https://docs.anthropic.com/)
- API Reference: [https://docs.anthropic.com/en/api](https://docs.anthropic.com/en/api)
- Claude Message API Guide: [https://docs.anthropic.com/claude/reference/messages_post](https://docs.anthropic.com/claude/reference/messages_post)

### Pricing and Token Information
- [https://www.anthropic.com/api](https://www.anthropic.com/api) (Pricing tab)
- Pricing based on token usage (input and output tokens separately)

#### Claude 3.7 Sonnet Pricing:
- Input: $3/MTok ($0.003 per 1K tokens)
- Output: $15/MTok ($0.015 per 1K tokens)
- Prompt caching: $3.75/MTok write, $0.30/MTok read
- Context window: 200K tokens

#### Claude 3 Opus Pricing:
- Input: $15/MTok ($0.015 per 1K tokens)
- Output: $75/MTok ($0.075 per 1K tokens)
- Context window: 200K tokens

#### Claude 3.5 Haiku Pricing:
- Input: $0.25/MTok ($0.00025 per 1K tokens)
- Output: $1.25/MTok ($0.00125 per 1K tokens)
- Context window: 200K tokens

#### Examples:
- 1,000 word document input with Claude 3.7 Sonnet: ~1,333 tokens = $0.004
- 1,000 word response with Claude 3.7 Sonnet: ~1,333 tokens = $0.02
- Full conversation (5,000 words) with Claude 3.5 Haiku: ~$0.008

## Token Conversion Guide

### Understanding Tokens vs. Words

Tokens are the basic units that AI models process text. Here's how to convert between tokens and words:

#### General Conversion Rules
- 1 token ≈ 4 characters in English
- 1 token ≈ 3/4 of an English word
- 1,000 tokens ≈ 750 words
- 1 million tokens (1 MTok) ≈ 750,000 words

#### Word Count Examples
- Short email (100 words) ≈ 133 tokens
- 1-page document (500 words) ≈ 667 tokens
- 10-page report (5,000 words) ≈ 6,667 tokens
- Novel (80,000 words) ≈ 106,667 tokens

#### Calculating Costs
For Claude 3.7 Sonnet:
- 1,000 word input ≈ 1,333 tokens ≈ $0.004 (at $3/MTok)
- 1,000 word output ≈ 1,333 tokens ≈ $0.02 (at $15/MTok)
- A typical conversation with 5,000 words total ≈ $0.10

For GPT-4o:
- 1,000 word input ≈ 1,333 tokens ≈ $0.0067 (at $5/MTok)
- 1,000 word output ≈ 1,333 tokens ≈ $0.02 (at $15/MTok)
- A typical conversation with 5,000 words total ≈ $0.13

#### API Cost Comparison (for processing 100,000 words)
| Model | Input Cost | Output Cost | Total (50/50 split) |
|-------|------------|-------------|---------------------|
| GPT-3.5 Turbo | $0.07 | $0.20 | $0.27 |
| Claude 3.5 Haiku | $0.03 | $0.17 | $0.20 |
| Claude 3.7 Sonnet | $0.40 | $2.00 | $2.40 |
| GPT-4o | $0.67 | $2.00 | $2.67 |
| Claude 3 Opus | $2.00 | $10.00 | $12.00 |
| GPT-4 Turbo | $1.33 | $4.00 | $5.33 |

#### Other Considerations
- Code, technical content, and non-English languages may have different token-to-word ratios
- Spaces, punctuation, and special characters also count as tokens
- Shorter words take fewer tokens (e.g., "I" is 1 token, "indubitably" might be 4 tokens)

## Integration Code Examples

### OpenAI ChatGPT Example
```python
from openai import OpenAI
client = OpenAI(api_key="your-api-key")

response = client.chat.completions.create(
  model="gpt-4o",
  messages=[
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Tell me about AI APIs"}
  ],
  max_tokens=100
)

print(response.choices[0].message.content)
```

### Anthropic Claude Example
```python
import anthropic

client = anthropic.Anthropic(api_key="your-api-key")

message = client.messages.create(
    model="claude-3-7-sonnet-20250219",
    system="You are a helpful assistant.",
    messages=[
        {"role": "user", "content": "Tell me about AI APIs"}
    ],
    max_tokens=100
)

print(message.content[0].text)
```

## Important Considerations

### Rate Limits
- Both APIs have rate limits based on requests per minute and tokens per minute
- OpenAI has different rate limits based on spend
- Anthropic has different rate limits based on organization tier

### Authentication
- Both require API keys for authentication
- Should be kept secure and not exposed in client-side code
- Environment variables are recommended for storing API keys

### Tokens
- Both APIs measure usage in tokens (~4 characters or ~3/4 of a word)
- Consider token usage carefully for cost efficiency
- Both charge separately for input and output tokens

### Data Privacy
- Review each provider's data policy for how your data is handled
- OpenAI: [https://openai.com/policies/api-data-usage-policies](https://openai.com/policies/api-data-usage-policies)
- Anthropic: [https://www.anthropic.com/policies/aup](https://www.anthropic.com/policies/aup)
