import React, { useState, useRef, useEffect } from 'react';
import { Send, Trash, PlusCircle, Menu, User, Bot, MessageSquare, LogOut, ChevronRight } from 'lucide-react';

const ChatGPTClone = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: "React Components Discussion", date: "Apr 1" },
    { id: 2, title: "Tailwind CSS Setup Help", date: "Apr 2" },
    { id: 3, title: "JavaScript Async Functions", date: "Apr 3" },
  ]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Create a chat if this is a new conversation
    if (currentChatId === null) {
      const newChatId = Date.now();
      const newChat = {
        id: newChatId,
        title: input.slice(0, 30) + (input.length > 30 ? '...' : ''),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      };
      
      setChatHistory(prev => [newChat, ...prev]);
      setCurrentChatId(newChatId);
    }
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    
    // Simulate AI response
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const botResponses = [
        "I'm an AI assistant. How can I help you today?",
        "That's an interesting question. Let me think about that...",
        "I can help you with coding, writing, and answering questions.",
        "I'm a large language model trained to assist with various tasks.",
        "I'd be happy to help you with that! Let me provide some information."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
      setIsLoading(false);
    }, 1000);
    
    setInput('');
  };

  const startNewChat = () => {
    setCurrentChatId(null);
    setMessages([]);
    setInput('');
  };

  const clearChat = () => {
    setMessages([]);
  };

  const loadChat = (chatId) => {
    // In a real app, you would load the actual chat messages from a database
    // Here we're just simulating loading a different chat
    setCurrentChatId(chatId);
    setMessages([
      { role: 'user', content: `This is chat ${chatId}. Previous message example.` },
      { role: 'assistant', content: 'Thank you for your message. I\'m here to help with any questions you might have.' }
    ]);
  };

  const formatMessage = (content) => {
    // Simple formatting to handle markdown-like syntax
    // You can expand this for more markdown features
    return content
      .split('\n')
      .map((line, i) => <div key={i}>{line || <br />}</div>);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-[#212121] text-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-[#2D2D2D] transition-all duration-300 flex flex-col overflow-hidden`}>
        {/* New Chat Button */}
        <div className="p-4">
          <button 
            onClick={startNewChat}
            className="w-full flex items-center gap-2 bg-[#3E3E3E] hover:bg-[#4A4A4A] text-white rounded-md p-3 transition-colors"
          >
            <PlusCircle size={16} />
            <span>New chat</span>
          </button>
        </div>
        
        {/* Chat History */}
        <div className="flex-grow overflow-y-auto">
          <h2 className="px-4 py-2 text-xs uppercase text-gray-400 font-semibold">Chat History</h2>
          <div className="space-y-1 px-2">
            {chatHistory.map(chat => (
              <button
                key={chat.id}
                onClick={() => loadChat(chat.id)}
                className={`w-full text-left p-2 rounded-md flex items-start gap-2 text-sm hover:bg-[#3E3E3E] transition-colors ${currentChatId === chat.id ? 'bg-[#3E3E3E]' : ''}`}
              >
                <MessageSquare size={16} className="mt-0.5 flex-shrink-0" />
                <div className="flex-grow truncate">
                  <div className="truncate">{chat.title}</div>
                  <div className="text-xs text-gray-400">{chat.date}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* User Section */}
        <div className="p-3 border-t border-[#3E3E3E] mt-auto">
          <div className="flex items-center gap-2 p-2 hover:bg-[#3E3E3E] rounded-md cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
              <User size={16} />
            </div>
            <div className="flex-grow">User Account</div>
            <LogOut size={16} className="text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="bg-[#2D2D2D] border-b border-[#3E3E3E] p-4 flex items-center">
          <button 
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white mr-4"
          >
            {isSidebarOpen ? <ChevronRight size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-xl font-bold flex-grow">ChatGPT Clone</h1>
          <button 
            onClick={clearChat}
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <Trash size={16} />
            <span className="text-sm">Clear chat</span>
          </button>
        </header>
        
        {/* Main Chat Area */}
        <main className="flex-grow overflow-auto p-4">
          <div className="max-w-3xl mx-auto">
            {/* Welcome message when no messages */}
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <Bot size={48} className="text-gray-400 mb-4" />
                <h2 className="text-2xl font-bold mb-2">How can I help you today?</h2>
                <p className="text-gray-400 max-w-md">
                  Ask me anything - I can help with coding, writing, answering questions, and more.
                </p>
              </div>
            )}
            
            {/* Messages */}
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`py-6 ${
                  index !== messages.length - 1 ? 'border-b border-[#3E3E3E]' : ''
                }`}
              >
                <div className="flex gap-4 max-w-3xl mx-auto">
                  {/* Avatar */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.role === 'user' ? 'bg-green-600' : 'bg-[#10A37F]'
                  }`}>
                    {message.role === 'user' ? 
                      <User size={16} className="text-white" /> : 
                      <Bot size={16} className="text-white" />
                    }
                  </div>
                  
                  {/* Message content */}
                  <div className="flex-grow">
                    <div className="font-medium mb-1">
                      {message.role === 'user' ? 'You' : 'ChatGPT'}
                    </div>
                    <div className="text-gray-300">
                      {formatMessage(message.content)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="py-6 border-b border-[#3E3E3E]">
                <div className="flex gap-4 max-w-3xl mx-auto">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#10A37F] flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="flex-grow">
                    <div className="font-medium mb-2">ChatGPT</div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '200ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '400ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </main>
        
        {/* Input Area */}
        <footer className="bg-[#2D2D2D] border-t border-[#3E3E3E] p-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="relative">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder="Message ChatGPT..."
                className="w-full bg-[#3E3E3E] border border-[#4A4A4A] text-white rounded-md px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#10A37F] focus:border-transparent resize-none max-h-48"
                rows={1}
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className={`absolute right-3 bottom-3 p-1 rounded-md ${
                  input.trim() && !isLoading ? 'text-[#10A37F] hover:bg-[#4A4A4A]' : 'text-gray-500'
                }`}
              >
                <Send size={20} />
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-2 text-center">
              ChatGPT can make mistakes. Consider checking important information.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ChatGPTClone;