
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Phone, 
  MapPin, 
  Clock,
  Home,
  Building,
  Wifi,
  Utensils,
  Shield,
  Car
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! Welcome to NST Hospitality. I'm here to help you with information about our PG and hotel services. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      suggestions: [
        "PG Room Prices",
        "Hotel Rates", 
        "Amenities",
        "Location & Contact"
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickResponses = {
    'pg room prices': {
      text: "Here are our PG room prices:\n\n🏠 **Ashiyana PG - Boys (Sector 11)**\n• Single Occupancy: ₹12,000/month\n• Double Sharing: ₹8,000/month\n• Triple Sharing: ₹6,000/month\n\n🏠 **Ashiyana PG - Girls (Sector 11)**\n• Single Occupancy: ₹14,000/month\n• Double Sharing: ₹9,000/month\n• Triple Sharing: ₹7,500/month\n\nAll prices include food, WiFi, and basic amenities!",
      suggestions: ["What's included?", "Book a room", "See amenities", "Contact info"]
    },
    'hotel rates': {
      text: "Here are our hotel room rates:\n\n🏨 **Hotel High View**\n• Basic Room: ₹1,500/night\n• Standard Room: ₹2,000/night\n• Premium Room: ₹2,500/night\n\n🏨 **La Casa Hotel**\n• Normal Room: ₹1,000/night\n• Super Deluxe: ₹1,500/night\n\nAll rooms include complimentary breakfast and WiFi!",
      suggestions: ["Check availability", "Hotel amenities", "Booking process", "Location"]
    },
    'amenities': {
      text: "Our facilities include:\n\n🛡️ **Safety & Security**\n• 24/7 CCTV surveillance\n• Secure entry systems\n\n📶 **Connectivity**\n• High-speed WiFi\n• Power backup\n\n🍽️ **Food & Kitchen**\n• Hygienic homemade meals\n• Modern kitchen facilities\n\n🚗 **Additional Services**\n• Parking facilities\n• Laundry service\n• Common recreation areas",
      suggestions: ["Food menu", "WiFi speed", "Parking details", "More info"]
    },
    'location': {
      text: "📍 **Our Locations:**\n\n🏠 **Ashiyana PG**\nSector 11, Faridabad, Haryana\n\n🏨 **Hotels**\nPremium locations in Faridabad\n\n📞 **Contact Details:**\n• Phone: +91 98765 43210\n• WhatsApp: +91 98765 43210\n• Available 24/7 for assistance\n\nWe're easily accessible by public transport and have parking facilities available!",
      suggestions: ["Get directions", "Call now", "WhatsApp", "Visit us"]
    },
    'booking': {
      text: "🎯 **Easy Booking Process:**\n\n1️⃣ **Contact Us**\n• Call: +91 98765 43210\n• WhatsApp: +91 98765 43210\n\n2️⃣ **Schedule Visit**\n• Free property tour\n• Meet our team\n\n3️⃣ **Documentation**\n• ID proof required\n• Security deposit\n\n4️⃣ **Move In**\n• Same day occupancy available\n• All amenities ready\n\nWould you like to schedule a visit today?",
      suggestions: ["Schedule visit", "Required documents", "Call now", "WhatsApp"]
    },
    'food': {
      text: "🍽️ **Our Food Services:**\n\n👨‍🍳 **Home-style Cooking**\n• Fresh, hygienic meals daily\n• North Indian cuisine\n• Vegetarian & Non-vegetarian options\n\n⏰ **Meal Times**\n• Breakfast: 7:30 - 9:30 AM\n• Lunch: 12:30 - 2:30 PM\n• Dinner: 7:30 - 9:30 PM\n\n🥗 **Special Features**\n• Monthly menu rotation\n• Special festival meals\n• Dietary preferences accommodated",
      suggestions: ["Menu details", "Special diets", "Meal timing", "Food quality"]
    }
  };

  const getResponse = (message: string): { text: string; suggestions?: string[] } => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rent') || lowerMessage.includes('pg')) {
      return quickResponses['pg room prices'];
    }
    if (lowerMessage.includes('hotel') || lowerMessage.includes('room') && lowerMessage.includes('night')) {
      return quickResponses['hotel rates'];
    }
    if (lowerMessage.includes('amenities') || lowerMessage.includes('facilities') || lowerMessage.includes('services')) {
      return quickResponses['amenities'];
    }
    if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('contact') || lowerMessage.includes('phone')) {
      return quickResponses['location'];
    }
    if (lowerMessage.includes('book') || lowerMessage.includes('reservation') || lowerMessage.includes('visit')) {
      return quickResponses['booking'];
    }
    if (lowerMessage.includes('food') || lowerMessage.includes('meal') || lowerMessage.includes('kitchen')) {
      return quickResponses['food'];
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return {
        text: "Hello! Great to meet you! 😊 I'm here to help you find the perfect accommodation. Are you looking for PG services or hotel rooms?",
        suggestions: ["PG Room Prices", "Hotel Rates", "Amenities", "Location"]
      };
    }
    if (lowerMessage.includes('thank')) {
      return {
        text: "You're welcome! Is there anything else you'd like to know about our services? I'm here to help! 😊",
        suggestions: ["Book a visit", "More amenities", "Contact details", "Other services"]
      };
    }

    return {
      text: "I'd be happy to help you with information about:\n\n• PG room prices and availability\n• Hotel rates and booking\n• Amenities and facilities\n• Location and contact details\n• Booking process\n\nWhat would you like to know more about?",
      suggestions: ["PG Prices", "Hotel Rates", "Amenities", "Book Visit"]
    };
  };

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        suggestions: response.suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputMessage);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg z-50 animate-bounce"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col bg-white border-0">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-2">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">NST Assistant</h3>
                  <p className="text-xs text-white/80">Online • Ready to help</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`flex items-start gap-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.isBot ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>
                  
                  <div>
                    <div className={`p-3 rounded-lg ${
                      message.isBot 
                        ? 'bg-white text-gray-800 shadow-sm' 
                        : 'bg-blue-600 text-white'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                    
                    {message.suggestions && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {message.suggestions.map((suggestion, idx) => (
                          <Button
                            key={idx}
                            variant="outline"
                            size="sm"
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="text-xs bg-white hover:bg-blue-50 border-blue-200 text-blue-600"
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 text-sm"
              />
              <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
